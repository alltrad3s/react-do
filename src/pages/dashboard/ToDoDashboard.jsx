import React, { useContext } from "react"
import { Home, Package2 } from "lucide-react"
import { UserContext } from "../../context/UserDataContext"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ToDoDashboard() {
  const { username } = useContext(UserContext);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <div className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">To-Do App</span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </div>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            To-Do Dashboard
          </h1>
          <div className="ml-auto text-sm font-medium">
            {username}
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="grid gap-4 md:grid-cols-3 lg:gap-8">
              <TaskCard
                title="Complete Project Proposal"
                description="Write and submit the project proposal for the new client by Friday."
              />
              <TaskCard
                title="Review Team Metrics"
                description="Analyze and summarize last month's team performance metrics."
              />
              <TaskCard
                title="Schedule Team Building"
                description="Organize a team building activity for next month."
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function TaskCard({ title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* You can add more task details here if needed */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Mark as Complete</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}