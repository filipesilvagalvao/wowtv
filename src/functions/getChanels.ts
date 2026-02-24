import path from "path"
import fs from "fs/promises"
import { PostProps } from "@/ts_types/ts_types"

const getChannels = async () => {
    try {
        const filePath = path.join(process.cwd(), "src", "web_channels", "web_channels.json")
        const file = await fs.readFile(filePath, "utf-8")
        const data: PostProps[] = JSON.parse(file)
        return data
    }
    catch (error) {
        console.error(error)
    }

}

export default getChannels