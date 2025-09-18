import { House } from "lucide-react"
import Link from "next/link";

export default function Dashboard () {
    return (
        <>
            <div className={"fixed inset-y-5 left-5 z-10 w-full md:w-80 flex flex-col bg-black rounded-2xl"}>
                <div className={"relative h-full flex flex-col gap-y-4 overflow-y-auto px-6"}>
                    <div className={"relative flex shrink-0 items-center h-16"}>Logo</div>
                    <nav className={"relative flex flex-col flex-1"}>
                        <ul className={"relative flex flex-col flex-1 gap-y-2"}>
                            <li>
                                <Link href={"/"} className={"flex text-sm bg-black/10 bg-primary p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm p-1 rounded-sm gap-x-2"}>
                                    <House className={"h-4 w-4"} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className={"flex text-sm p-1 rounded-sm gap-x-2"}>
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