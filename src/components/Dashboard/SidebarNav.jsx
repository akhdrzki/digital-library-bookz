import { Sidebar, SidebarItems } from './Sidebar.jsx';


import {
  Book,
  BookUser,
  NotebookPen
} from 'lucide-react'

const SidebarNav = () => {

  return (
    <Sidebar>
      <SidebarItems icon={<Book size={20} />} text="Pendataan" />
      <SidebarItems icon={<BookUser size={20} />} text="Peminjaman" />
    </Sidebar>
  )
}

export default SidebarNav;
