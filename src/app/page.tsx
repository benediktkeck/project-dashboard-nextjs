import { House } from "lucide-react"
import Link from "next/link";

export default function Dashboard () {
    return (
        <>
            <div className={"fixed z-10 w-full md:w-72 md:h-full flex flex-col"}>
                <div className={"relative h-full flex flex-col gap-y-4 overflow-y-auto border-r-1 border-blue-600 px-6"}>
                    <div className={"relative flex shrink-0 items-center h-16"}>Logo</div>
                    <nav className={"relative flex flex-col flex-1"}>
                        <ul className={"relative flex flex-col flex-1 gap-y-2"}>
                            <li>
                                <Link href={"/"} className={"flex text-sm bg-black/10 text-blue-600 p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm text-black p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm text-black p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm text-black p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm text-black p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}