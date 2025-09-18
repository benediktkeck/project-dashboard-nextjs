"use client"

import { FolderKanban, House, Rocket, ClipboardCheck,  CircleUser  } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import React from "react";

type SidebarLinkProps = {
    href: string,
    label: string,
    icon: React.ElementType,
}

const SidebarLink = ({ href, label, icon: Icon } : SidebarLinkProps) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={twMerge(
            "flex items-center text-md hover:bg-primary/25 px-4 py-1.5 rounded-xl gap-x-3",
            pathname === href && "bg-primary"
        )}>
            <Icon className={"h-5 w-5"} />
            {label}
        </Link>
    )
}

const Sidebar = () => {

    return (
        <div className={"fixed inset-y-5 left-5 z-10 w-full md:w-80 flex flex-col bg-black rounded-2xl"}>
            <div className={"relative h-full flex flex-col gap-y-6 overflow-y-auto p-4"}>
                <div className={"relative flex shrink-0 items-center gap-x-3"}>
                    <div className={"bg-primary p-2 rounded-xl"}>
                        <Rocket className={"h68 w-6"} />
                    </div>
                    <h1 className={"text-2xl font-semibold"}>Project Dashboard</h1>
                </div>
                <hr className={"border-base/25"} />
                <nav className={"relative flex flex-col flex-1"}>
                    <ul className={"relative flex flex-col flex-1 gap-y-3"}>
                        <li>
                            <SidebarLink href={"/"} label={"Dashboard"} icon={House} />
                        </li>
                        <li>
                            <SidebarLink href={"/projects"} label={"Projekte"} icon={FolderKanban} />
                        </li>
                        <li>
                            <SidebarLink href={"/tasks"} label={"Tasks"} icon={ClipboardCheck} />
                        </li>
                        <li>
                            <SidebarLink href={"/profile"} label={"Profil"} icon={CircleUser} />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar