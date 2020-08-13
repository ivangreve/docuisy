export function setFile(state, payload) {
  state.fileContent = payload.content
  state.filePath = payload.path
}
