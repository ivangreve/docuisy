export function setFile(state, payload) {
  state.fileContent = payload.content
  state.filePath = payload.path
}

export function setEditMode(state, payload) {
  state.editMode = payload
}
