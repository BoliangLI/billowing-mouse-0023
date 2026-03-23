
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          欢迎使用
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
          Hello World
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          这是一个基于 React + TypeScript + Tailwind CSS 构建的现代 Web 应用
        </p>
        
        {/* 时间显示组件 */}
        <div className="flex items-center justify-center gap-2 bg-card border border-border rounded-lg px-6 py-4">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="text-2xl font-mono font-semibold text-foreground">
            {format(currentTime, "yyyy 年 MM 月 dd 日 HH:mm:ss", { locale: zhCN })}
          </span>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="text-base">
            开始探索
          </Button>
          <Button size="lg" variant="outline" className="text-base">
            了解更多
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-sm text-muted-foreground">
        由 Vesa 构建
      </div>
    </div>
  );
};

export default Home;
