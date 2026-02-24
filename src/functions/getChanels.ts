import path from "path"
import fs from "fs/promises"
import { PostProps } from "@/ts_types/ts_types"

import data from "@/web_channels/web_channels.json"

const getChannels = async () => {
  return data
}

export default getChannels