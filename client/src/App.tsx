import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Treatments from "@/pages/Treatments";
import Specializations from "@/pages/Specializations";
import SpecializationDetail from "@/pages/SpecializationDetail";
import Facilities from "@/pages/Facilities";
import Telehealth from "@/pages/Telehealth";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/specializations" component={Specializations} />
          <Route path="/specializations/:slug" component={SpecializationDetail} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/telehealth" component={Telehealth} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
