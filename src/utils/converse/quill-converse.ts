import Quill from 'quill'

export function quillConverse(delta: any): string {
    // buat container dummy (tidak harus tampil di UI)
    const container = document.createElement('div')
    // buat instance Quill di container tersebut
    const quill = new Quill(container)
    // set konten delta
    quill.setContents(delta)
    // ambil HTML
    return quill.root.innerHTML
}