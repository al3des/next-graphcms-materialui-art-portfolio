import {Drawer } from "@mui/material";

import {DRAWER_WIDTH} from '@/constants/constants'

export default function Aside({ children }) {
  return (
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ width: DRAWER_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': { width: DRAWER_WIDTH} }}
        position="fixed"
      >
        {children}
      </Drawer>
  );
}
