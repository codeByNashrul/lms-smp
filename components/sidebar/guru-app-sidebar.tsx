"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconChecklist,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconInfoCircle,
  IconListCheck,
  IconListDetails,
  IconListTree,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavSecondary } from "@/components/sidebar/nav-secondary"
import { NavUser } from "@/components/sidebar/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/Picture1.png"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/guru",
      icon: IconDashboard,
    },
    {
      title: "Perangkat Pembelajaran",
      url: "/guru/perangkat",
      icon: IconListDetails,
    },
    {
      title: "Kelola Materi Pembelajaran",
      url: "/guru/materials",
      icon: IconListCheck,
    },
    {
      title: "Kelola Tugas",
      url: "/guru/assignments",
      icon: IconListTree,
    },
    {
      title: "Kelola Submission",
      url: "/guru/submissions",
      icon: IconChecklist,
    },
    {
      title: "Kelola Pengumuman",
      url: "/guru/announcements",
      icon: IconInfoCircle,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
}

export function GuruAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <Image src={Logo} alt="Logo" className="size-8" />
                <span className="text-base font-semibold">LMSSMP.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
