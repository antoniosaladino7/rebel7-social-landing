import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Scuole from "./pages/Scuole";
import Comuni from "./pages/Comuni";
import Aziende from "./pages/Aziende";
import Organizzazioni from "./pages/Organizzazioni";
import Pilot from "./pages/Pilot";
import Demo from "./pages/Demo";
import Casi from "./pages/Casi";
import Readiness from "./pages/Readiness";
import Implementation from "./pages/Implementation";
import Dashboard from "./pages/Dashboard";
import Solutions from "./pages/Solutions";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/rebel7/scuole"} component={Scuole} />
      <Route path={"/rebel7/comuni"} component={Comuni} />
      <Route path={"/rebel7/aziende"} component={Aziende} />
      <Route path={"/rebel7/organizzazioni"} component={Organizzazioni} />
      <Route path={"/rebel7/pilot"} component={Pilot} />
      <Route path={"/rebel7/demo"} component={Demo} />
      <Route path={"/rebel7/casi"} component={Casi} />
      <Route path={"/rebel7/readiness"} component={Readiness} />
      <Route path={"/rebel7/implementation"} component={Implementation} />
      <Route path={"/rebel7/dashboard"} component={Dashboard} />
      <Route path={"/rebel7/solutions"} component={Solutions} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
