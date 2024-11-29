import { useState } from 'react'


const useToggleSidebar = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed((prevState) => !prevState);
    }

    return { isSidebarCollapsed, toggleSidebar };
}

export default useToggleSidebar;