let axiosInstance = require("@/plugins/axiosInstance")

export async function getFile({ commit }, payload) {
  axiosInstance
    .post("/api/documents/getFileContent", { path: payload.path })
    .then((response) => {
      commit(
        "setFile",
        { content: response.data.fileContent, path: payload.path },
        {},
        {
          root: true
        }
      )
    })
}

export async function saveFile({ commit }, payload) {
  axiosInstance.post("/api/documents/saveFileContent", payload).then(() => {
    alert("Registro Guardado!")
  })
}
