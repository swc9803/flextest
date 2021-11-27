import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'
import Display from '@/csstest/Display'
import Lineheight from '@/csstest/Lineheight'
import Link from '@/csstest/Link'
import Cube from '@/csstest/Cube'
import Flip from '@/csstest/Flip'
import Flip2 from '@/csstest/Flip2'
import Shape from '@/csstest/Shape'
import Fleximg from '@/csstest/flex/Fleximg'
import Flex1 from '@/csstest/flex/Flex1'
import Flex2 from '@/csstest/flex/Flex2'
import Flex3 from '@/csstest/flex/Flex3'
import Flex4 from '@/csstest/flex/Flex4'
import Flex5 from '@/csstest/flex/Flex5'
import Flex6 from '@/csstest/flex/Flex6'
import Flex7 from '@/csstest/flex/Flex7'
import Grid1 from '@/csstest/grid/Grid1'
import Grid2 from '@/csstest/grid/Grid2'
import Grid3 from '@/csstest/grid/Grid3'
import Grid4 from '@/csstest/grid/Grid4'
import Grid5 from '@/csstest/grid/Grid5'
import Gridtest from '@/csstest/grid/Gridtest'
import Toggle from '@/csstest/Toggle'
import Footer from '@/csstest/Footer'
import Youtube from '@/csstest/Youtube'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
  {
    path: '/display',
    name: 'Display',
    component: Display
  },
  {
    path: '/lineheight',
    name: 'Lineheight',
    component: Lineheight
  },
  {
    path: '/link',
    name: 'Link',
    component: Link
  },
  {
    path: '/cube',
    name: 'Cube',
    component: Cube
  },
  {
    path: '/flip',
    name: 'Flip',
    component: Flip
  },
  {
    path: '/flip2',
    name: 'Flip2',
    component: Flip2
  },
  {
    path: '/shape',
    name: 'Shape',
    component: Shape
  },
  {
    path: '/fleximg',
    name: 'Fleximg',
    component: Fleximg
  },
  {
    path: '/flex1',
    name: 'Flex1',
    component: Flex1
  },
  {
    path: '/flex2',
    name: 'Flex2',
    component: Flex2
  },
  {
    path: '/flex3',
    name: 'Flex3',
    component: Flex3
  },
  {
    path: '/flex4',
    name: 'Flex4',
    component: Flex4
  },
  {
    path: '/flex5',
    name: 'Flex5',
    component: Flex5
  },
  {
    path: '/flex6',
    name: 'Flex6',
    component: Flex6
  },
  {
    path: '/flex7',
    name: 'Flex7',
    component: Flex7
  },
  {
    path: '/grid1',
    name: 'Grid1',
    component: Grid1
  },
  {
    path: '/grid2',
    name: 'Grid2',
    component: Grid2
  },
  {
    path: '/grid3',
    name: 'Grid3',
    component: Grid3
  },
  {
    path: '/grid4',
    name: 'Grid4',
    component: Grid4
  },
  {
    path: '/grid5',
    name: 'Grid5',
    component: Grid5
  },
  {
    path: '/gridtest',
    name: 'Gridtest',
    component: Gridtest
  },
  {
    path: '/Toggle',
    name: 'Toggle',
    component: Toggle
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
