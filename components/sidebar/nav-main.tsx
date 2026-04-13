"use client"

import { usePathname } from "next/navigation"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup className="pt-0">

      {/* Label */}
      <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-1">
        Menu
      </SidebarGroupLabel>

      <SidebarGroupContent className="flex flex-col gap-2">

        {/* Menu List */}
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  isActive={isActive}
                  className={`
                    group flex items-center
                    rounded-xl px-3 py-2.5

                    text-[15px] font-medium
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-blue-900 text-white shadow-sm"
                        : "text-blue-900/80 dark:text-blue-200/80 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
                    }

                    hover:translate-x-[2px]
                  `}
                >
                  <Link href={item.url} className="flex items-center gap-3 w-full">

                    {/* ICON */}
                    {item.icon && (
                      <item.icon
                        className={`
                          w-5 h-5 transition-all
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-70 group-hover:opacity-100"
                          }
                        `}
                      />
                    )}

                    {/* TEXT */}
                    <span className="tracking-tight">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>

      </SidebarGroupContent>
    </SidebarGroup>
  )
}