"use client"

import { motion } from "framer-motion"
import { Github, Database, Server, Code, FileJson, Braces, Globe, FileCode2, Layers, Layers2, Plus, DatabaseBackupIcon, DatabaseIcon } from "lucide-react"



export default function TechBadge({ name, icon }) {
  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "github":
        return <Github size={16} />
      case "mongodb":
        return <Database size={16} />
      case "express":
        return <Server size={16} />
      case "nextjs":
        return <Layers size={16} />
      case "javascript":
        return <Braces size={16} />
      case "typescript":
        return <FileJson size={16} />
      case "react":
        return <div className="items-center justify-center flex"><i class="ci ci-react"></i></div>
      case "html":
        return <Globe size={16} />
      case "css":
        return <FileCode2 size={16} />
      case "nodejs":
        return <Server size={16} />
        case "python":
        return <Layers2 size={16} />
        case "cpp":
        return <Plus size={16} />
        case "django":
        return <DatabaseIcon size={16} />
      default:
        return <Code size={16} />
    }
  }

  return (
    <motion.div
      className="bg-[#0c1220] border text-white text-xs lg:text-sm border-gray-700 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer"
      whileHover={{
        scale: 1.05,
        borderColor: "#2dd4bf",
        boxShadow: "0 0 10px rgba(45, 212, 191, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span className="text-teal-400" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
        {getIcon()}
      </motion.span>
      <span>{name}</span>
    </motion.div>
  )
}

