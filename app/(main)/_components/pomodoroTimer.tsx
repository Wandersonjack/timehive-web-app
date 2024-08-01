"use client";
import React, { useState, useEffect } from "react";
import { Settings, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Header from "./header";

//type declaration
declare global {
  interface Window {
    setInterval: (handler: TimerHandler, timeout?: number) => number;
  }
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

// Pomodoro Timer Component
const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work");
  const [workTime, setWorkTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [tempSettings, setTempSettings] = useState({
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  });
  const [saveState, setSaveState] = useState("idle"); // 'idle', 'success', or 'error'

  useEffect(() => {
    let intervalId: number | undefined;

    if (isActive && time > 0) {
      intervalId = window.setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(getCurrentModeTime() * 60);
  };

  const getCurrentModeTime = () => {
    switch (mode) {
      case "work":
        return workTime;
      case "shortBreak":
        return shortBreakTime;
      case "longBreak":
        return longBreakTime;
      default:
        return workTime;
    }
  };

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
    setIsActive(false);
    setTime(
      newMode === "work"
        ? workTime * 60
        : newMode === "shortBreak"
        ? shortBreakTime * 60
        : longBreakTime * 60
    );
  };

  const handleTempSettingChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setTempSettings({ ...tempSettings, [key]: Number(e.target.value) });
  };

  const handleSaveSettings = () => {
    if (
      tempSettings.workTime <= 0 ||
      tempSettings.shortBreakTime <= 0 ||
      tempSettings.longBreakTime <= 0
    ) {
      setSaveState("error");
      setTimeout(() => setSaveState("idle"), 2000);
      return;
    }

    setWorkTime(tempSettings.workTime);
    setShortBreakTime(tempSettings.shortBreakTime);
    setLongBreakTime(tempSettings.longBreakTime);
    setTime(tempSettings[`${mode}Time` as keyof typeof tempSettings] * 60);
    setSaveState("success");
    setTimeout(() => {
      setSaveState("idle");
      setIsSettingsOpen(false);
    }, 1500);
  };

  const handleOpenSettingsChange = (open: boolean) => {
    if (open) {
      setTempSettings({ workTime, shortBreakTime, longBreakTime });
    }
    setIsSettingsOpen(open);
    setSaveState("idle");
  };

  const SaveButton = () => {
    let content;
    let className =
      "transition-all duration-500 ease-in-out flex items-center justify-center min-w-[120px]";

    switch (saveState) {
      case "success":
        content = (
          <>
            <Check className="mr-2 h-4 w-4" /> Saved
          </>
        );
        className += " bg-green-500 hover:bg-green-600";
        break;
      case "error":
        content = (
          <>
            <X className="mr-2 h-4 w-4" /> Error
          </>
        );
        className += " bg-red-500 hover:bg-red-600";
        break;
      default:
        content = "Save changes";
        className += " bg-primary hover:bg-primary/90";
    }

    return (
      <Button
        className={className}
        onClick={handleSaveSettings}
        disabled={saveState !== "idle"}
      >
        {content}
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">Pomodoro Timer</CardTitle>
            <Dialog
              open={isSettingsOpen}
              onOpenChange={handleOpenSettingsChange}
            >
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="workTime" className="text-right">
                      Work Time (min):
                    </Label>
                    <Input
                      id="workTime"
                      type="number"
                      value={tempSettings.workTime}
                      onChange={(e) => handleTempSettingChange(e, "workTime")}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="shortBreakTime" className="text-right">
                      Short Break (min):
                    </Label>
                    <Input
                      id="shortBreakTime"
                      type="number"
                      value={tempSettings.shortBreakTime}
                      onChange={(e) =>
                        handleTempSettingChange(e, "shortBreakTime")
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="longBreakTime" className="text-right">
                      Long Break (min):
                    </Label>
                    <Input
                      id="longBreakTime"
                      type="number"
                      value={tempSettings.longBreakTime}
                      onChange={(e) =>
                        handleTempSettingChange(e, "longBreakTime")
                      }
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsSettingsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <SaveButton />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <Tabs
              value={mode}
              onValueChange={handleModeChange}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="shortBreak">Short Break</TabsTrigger>
                <TabsTrigger value="longBreak">Long Break</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="text-6xl font-bold text-center my-6">
              {formatTime(time)}
            </div>
            <Progress
              value={(time / (getCurrentModeTime() * 60)) * 100}
              className="w-full"
            />
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant={isActive ? "destructive" : "default"}
                onClick={toggleTimer}
              >
                {isActive ? "Pause" : "Start"}
              </Button>
              <Button variant="outline" onClick={resetTimer}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PomodoroTimer;
