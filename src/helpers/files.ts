import { promises as fs } from 'fs'
import * as path from 'path'

export function buildCodePreview(code) {
  const codeStrToArray = code.split('\n')
  const preiewArray = codeStrToArray.reduce((acc, str, i) => {
    i < 10 ? acc.push(str) : null
    return acc
  }, [])

  return preiewArray.join('\n')
}

export async function buildFile(filename, content) {
  const filePath = getSnippetPath(filename)
  try {
    await fs.writeFile(filePath, content, 'utf8')
  } catch (e) {
    console.log(e)
  }
}

export function getSnippetPath(filename) {
  return path.join(global.rootPath, 'data', 'files', filename)
}

export async function deleteFile(filepath) {
  try {
    await fs.unlink(filepath)
  } catch (e) {
    console.log(e)
  }
}
