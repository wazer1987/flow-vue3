/**
 * Created by OXOYO on 2019/7/11.
 *
 * 物料配置
 */

 export default function (enableMaterials) {
  /*
  // FIXME 锚点、图形控制坐标系
  (0, 0) ---------- (0.5, 0) ---------- (1, 0)
  |                                          |
  |                                          |
  |                                          |
  (0, 0.5)                            (1, 0.5)
  |                                          |
  |                                          |
  |                                          |
  (0, 1) ---------- (0.5, 1) ---------- (1, 1)
  */

  const shapeControl = {
    // 控制器
    controllers: [
      [0, 0, 'nwse-resize'],
      [0, 0.5, 'ew-resize'],
      [0, 1, 'nesw-resize'],
      [0.5, 0, 'ns-resize'],
      [0.5, 1, 'ns-resize'],
      [1, 0, 'nesw-resize'],
      [1, 0.5, 'ew-resize'],
      [1, 1, 'nwse-resize']
    ],
    // 旋转
    rotate: true
  }

  // 锚点坐标
  const anchorPoints = [
    [0, 0],
    [0.25, 0],
    [0.5, 0],
    [0.75, 0],
    [1, 0],
    [1, 0.25],
    [1, 0.5],
    [1, 0.75],
    [1, 1],
    [0.75, 1],
    [0.5, 1],
    [0.25, 1],
    [0, 1],
    [0, 0.75],
    [0, 0.5],
    [0, 0.25]
  ]

  const defMaterials = [
    {
      name: 'general',
      label: 'General',
      lang: 'L10001',
      icon: '',
      enable: true,
      children: [
        {
          type: 'and',
          label: 'And',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 20,
          minHeight: 20,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 5.78 1.36 Q 26.18 1.36 26.18 14.96 Q 26.18 28.56 5.78 28.56 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        }
      ]
    },
    {
      name: 'miscellaneous',
      label: 'Miscellaneous',
      lang: 'L10302',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'advanced',
      label: 'Advanced',
      lang: 'L10303',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'basic',
      label: 'Basic',
      lang: 'L10304',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'arrow',
      label: 'Arrow',
      lang: 'L10002',
      icon: '',
      enable: true,
      children: [
        {
          type: 'arrow-down',
          label: 'Arrow Down',
          defaultLabel: '',
          enable: true,
          width: 60,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 11.76 1.4 L 11.76 17.84 L 6.16 17.84 L 15.96 28.56 L 25.76 17.84 L 20.16 17.84 L 20.16 1.4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'arrow-left',
          label: 'Arrow Left',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 10.5 L 12.69 10.5 L 12.69 4.5 L 1.2 15 L 12.69 25.5 L 12.69 19.5 L 30.3 19.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'arrow-right',
          label: 'Arrow Right',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.2 10.5 L 18.81 10.5 L 18.81 4.5 L 30.3 15 L 18.81 25.5 L 18.81 19.5 L 1.2 19.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'arrow-up',
          label: 'Arrow Up',
          defaultLabel: '',
          enable: true,
          width: 60,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 11.76 28.56 L 11.76 12.12 L 6.16 12.12 L 15.96 1.4 L 25.76 12.12 L 20.16 12.12 L 20.16 28.56 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'bent-left-arrow',
          label: 'Bent Left Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 21.28 28.56 L 21.28 14.84 C 21.28 14.07 20.65 13.44 19.88 13.44 L 12.88 13.44 L 12.88 17.08 L 2.24 9.24 L 12.88 1.4 L 12.88 5.04 L 19.88 5.04 C 25.18 5.19 29.4 9.54 29.4 14.84 L 29.4 28.56 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'bent-right-arrow',
          label: 'Bent Right Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 10.36 28.56 L 10.36 14.84 C 10.36 14.07 10.99 13.44 11.76 13.44 L 18.76 13.44 L 18.76 17.08 L 29.4 9.24 L 18.76 1.4 L 18.76 5.04 L 11.76 5.04 C 6.46 5.19 2.24 9.54 2.24 14.84 L 2.24 28.56 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'bent-up-arrow',
          label: 'Bent Up Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.2 18.35 L 17.4 18.35 L 17.4 9.41 L 13.8 9.41 L 21.9 2.4 L 30.3 9.41 L 26.4 9.41 L 26.4 27.3 L 1.2 27.3 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'callout-double-arrow',
          label: 'Callout Double Arrow',
          defaultLabel: '',
          enable: true,
          width: 40,
          height: 80,
          minWidth: 40,
          minHeight: 80,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 13.16 8.09 L 13.16 6.69 L 10.64 6.69 L 15.96 1.4 L 21.28 6.69 L 18.76 6.69 L 18.76 8.09 L 22.96 8.09 L 22.96 22.01 L 18.76 22.01 L 18.76 23.41 L 21.28 23.41 L 15.96 28.56 L 10.64 23.41 L 13.16 23.41 L 13.16 22.01 L 8.96 22.01 L 8.96 8.09 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'callout-quad-arrow',
          label: 'Callout Quad Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 13.02 7.98 L 13.02 6.58 L 10.5 6.58 L 15.82 1.4 L 21.14 6.58 L 18.62 6.58 L 18.62 7.98 L 22.82 7.98 L 22.82 12.18 L 24.22 12.18 L 24.22 9.66 L 29.4 14.98 L 24.22 20.3 L 24.22 17.78 L 22.82 17.78 L 22.82 21.98 L 18.62 21.98 L 18.62 23.38 L 21.14 23.38 L 15.82 28.56 L 10.5 23.38 L 13.02 23.38 L 13.02 21.98 L 8.82 21.98 L 8.82 17.78 L 7.42 17.78 L 7.42 20.3 L 2.24 14.98 L 7.42 9.66 L 7.42 12.18 L 8.82 12.18 L 8.82 7.98 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'callout-up-arrow',
          label: 'Callout Up Arrow',
          defaultLabel: '',
          enable: true,
          width: 40,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 13.16 12.04 L 13.16 6.44 L 10.64 6.44 L 15.96 1.12 L 21.28 6.44 L 18.76 6.44 L 18.76 12.04 L 24.36 12.04 L 24.36 28.56 L 7.56 28.56 L 7.56 12.04 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'chevron-arrow',
          label: 'Chevron Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 40,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 10.5 15 L 1.5 6 L 21.3 6 L 30.3 15 L 21.3 24 L 1.5 24 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'circular-arrow',
          label: 'Circular Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.2 17.75 C 1.2 10.43 7.18 4.5 14.55 4.5 C 21.92 4.5 27.9 10.43 27.9 17.75 L 30.3 17.75 L 24.3 25.2 L 18.3 17.75 L 20.7 17.75 C 20.7 14.38 17.95 11.65 14.55 11.65 C 11.15 11.65 8.4 14.38 8.4 17.75 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'jump-in-right-arrow',
          label: 'Jump-in Right Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 11.07 17.86 L 15.93 17.86 C 15.83 10.28 10.43 3.78 2.97 2.27 C 12.88 1.62 21.8 8.23 24.03 17.86 L 28.89 17.86 L 19.98 28.35 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'jump-in-left-arrow',
          label: 'Jump-in Left Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 20.79 17.86 L 15.93 17.86 C 16.03 10.28 21.43 3.78 28.89 2.27 C 18.98 1.62 10.06 8.23 7.83 17.86 L 2.97 17.86 L 11.88 28.35 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-linejoin="round" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'left-and-up-arrow',
          label: 'Left and Up Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 9.07 16.3 L 17.42 16.3 L 17.42 7.95 L 14.08 7.95 L 21.6 1.4 L 29.4 7.95 L 25.78 7.95 L 25.78 24.66 L 9.07 24.66 L 9.07 28.28 L 2.52 20.48 L 9.07 12.96 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'left-sharp-edged-head-arrow',
          label: 'Left Sharp Edged Head Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 40,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 12 L 6.72 12 L 10.3 6 L 6.72 6 L 1.2 15 L 6.72 24 L 10.3 24 L 6.72 18 L 30.3 18 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'notched-signal-in-arrow',
          label: 'Notched Signal-in Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 20,
          minWidth: 40,
          minHeight: 20,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.5 10.5 L 26.27 10.5 L 30.3 15 L 26.27 19.5 L 1.5 19.5 L 5.38 15 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'quad-arrow',
          label: 'Quad Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 13.1 12.26 L 13.1 6.69 L 10.6 6.69 L 15.89 1.4 L 21.18 6.69 L 18.68 6.69 L 18.68 12.26 L 24.25 12.26 L 24.25 9.76 L 29.4 15.05 L 24.25 20.34 L 24.25 17.84 L 18.68 17.84 L 18.68 23.41 L 21.18 23.41 L 15.89 28.56 L 10.6 23.41 L 13.1 23.41 L 13.1 17.84 L 7.53 17.84 L 7.53 20.34 L 2.24 15.05 L 7.53 9.76 L 7.53 12.26 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'right-notched-arrow',
          label: 'Right Notched Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.5 10.5 L 18.81 10.5 L 18.81 4.5 L 30.3 15 L 18.81 25.5 L 18.81 19.5 L 1.5 19.5 L 5.38 15 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'sharp-edged-arrow',
          label: 'Sharp Edged Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 40,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 12 L 6.72 12 L 9.41 7.5 L 6.72 6 L 1.2 15 L 6.72 24 L 9.41 22.5 L 6.72 18 L 30.3 18 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'signal-in-arrow',
          label: 'Signal-in Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 20,
          minWidth: 40,
          minHeight: 20,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.2 10.5 L 26.27 10.5 L 30.3 15 L 26.27 19.5 L 1.2 19.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'slender-left-arrow',
          label: 'Slender Left Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 12 L 6.72 12 L 6.72 6 L 1.2 15 L 6.72 24 L 6.72 18 L 30.3 18 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'slender-two-way-arrow',
          label: 'Slender Two Way Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 24.63 12 L 6.72 12 L 6.72 6 L 1.2 15 L 6.72 24 L 6.72 18 L 24.63 18 L 24.63 24 L 30.3 15 L 24.63 6 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'slender-wide-tailed-arrow',
          label: 'Slender Wide Tailed Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 18.96 12 L 7.02 12 L 7.02 6 L 1.5 15 L 7.02 24 L 7.02 18 L 18.96 18 L 23.44 24 L 30.3 24 L 24.33 15 L 30.3 6 L 23.44 6 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'striped-arrow',
          label: 'Striped Arrow',
          defaultLabel: '',
          enable: false,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 8.36 10.5 L 18.81 10.5 L 18.81 4.5 L 30.3 15 L 18.81 25.5 L 18.81 19.5 L 8.36 19.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path><rect x="3.59" y="10.5" width="3.58" height="9" fill="#ffffff" stroke="#000000" stroke-width="1.3" pointer-events="all"></rect><rect x="1.2" y="10.5" width="1.19" height="9" fill="#ffffff" stroke="#000000" stroke-width="1.3" pointer-events="all"></rect></g></g><g></g><g></g></g>`
        },
        {
          type: 'stylised-notched-arrow',
          label: 'Stylised Notched Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 1.5 7.5 L 21.79 12 L 18.81 6 L 30.3 15 L 18.81 24 L 21.79 19.5 L 1.5 22.5 L 5.38 15 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="8" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'triad-arrow',
          label: 'Triad Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 56,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 12.84 16.5 L 12.84 10.5 L 10.15 10.5 L 15.82 4.8 L 21.5 10.5 L 18.81 10.5 L 18.81 16.5 L 24.78 16.5 L 24.78 13.8 L 30.3 19.5 L 24.78 25.2 L 24.78 22.5 L 12.84 22.5 L 6.87 22.5 L 6.87 25.2 L 1.2 19.5 L 6.87 13.8 L 6.87 16.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'two-way-arrow-horizontal',
          label: 'Two Way Arrow Horizontal',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 20.4 10.5 L 20.4 6 L 30.3 15 L 20.4 24 L 20.4 19.5 L 11.4 19.5 L 11.4 24 L 1.5 15 L 11.4 6 L 11.4 10.5 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'two-way-arrow-vertical',
          label: 'Two Way Arrow Vertical',
          defaultLabel: '',
          enable: true,
          width: 60,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 11.76 19.04 L 7.56 19.04 L 15.96 28.28 L 24.36 19.04 L 20.16 19.04 L 20.16 10.64 L 24.36 10.64 L 15.96 1.4 L 7.56 10.64 L 11.76 10.64 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'u-turn-arrow',
          label: 'U Turn Arrow',
          defaultLabel: '',
          enable: true,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 2.24 13.58 C 2.24 6.7 7.82 1.12 14.7 1.12 C 21.58 1.12 27.16 6.7 27.16 13.58 L 29.4 13.58 L 23.8 20.58 L 18.2 13.58 L 20.44 13.58 C 20.41 10.41 17.82 7.86 14.65 7.89 C 11.48 7.91 8.93 10.5 8.96 13.67 L 8.96 28.56 L 2.24 28.56 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'u-turn-down-arrow',
          label: 'U Turn Down Arrow',
          defaultLabel: '',
          enable: false,
          width: 80,
          height: 60,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 24.3 L 30.3 15.3 C 30.3 10 26 5.7 20.7 5.7 C 15.4 5.7 11.1 10 11.1 15.3 L 15 15.3 L 8.1 24.3 L 1.2 15.3 L 5.1 15.3 C 5.1 10 9.4 5.7 14.7 5.7 L 20.7 5.7 C 19.45 5.75 18.22 6.05 17.1 6.6 C 21.37 7.32 24.52 10.97 24.6 15.3 L 24.6 24.3 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'u-turn-left-arrow',
          label: 'U Turn Left Arrow',
          defaultLabel: '',
          enable: false,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 7.28 1.45 L 15.65 1.42 C 18.86 1.41 21.83 3.1 23.44 5.87 C 25.06 8.63 25.07 12.04 23.48 14.82 C 21.89 17.6 18.93 19.31 15.72 19.33 L 15.7 15.69 L 7.36 22.16 L 15.75 28.56 L 15.74 24.92 C 18.11 24.91 20.38 23.95 22.05 22.27 C 23.72 20.58 24.65 18.3 24.63 15.94 L 24.61 10.34 C 24.57 11.5 24.29 12.65 23.79 13.7 C 23.11 9.74 19.7 6.81 15.67 6.74 L 7.3 6.77 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'u-turn-right-arrow',
          label: 'U Turn Right Arrow',
          defaultLabel: '',
          enable: false,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 24.64 1.45 L 16.27 1.42 C 11.31 1.4 7.28 5.39 7.26 10.34 C 7.24 15.28 11.24 19.31 16.2 19.33 L 16.22 15.69 L 24.56 22.16 L 16.17 28.56 L 16.18 24.92 C 13.81 24.91 11.54 23.95 9.87 22.27 C 8.2 20.58 7.27 18.3 7.29 15.94 L 7.31 10.34 C 7.35 11.5 7.63 12.65 8.13 13.7 C 8.81 9.74 12.22 6.81 16.25 6.74 L 24.62 6.77 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        },
        {
          type: 'u-turn-up-arrow',
          label: 'U Turn Up Arrow',
          defaultLabel: '',
          enable: false,
          width: 80,
          height: 80,
          minWidth: 40,
          minHeight: 40,
          anchorPoints: anchorPoints,
          shapeControl: shapeControl,
          icon: `<g><g></g><g><g transform="translate(0.5,0.5)" style="visibility: visible;"><path d="M 30.3 5.7 L 30.3 14.7 C 30.3 20 26 24.3 20.7 24.3 C 15.4 24.3 11.1 20 11.1 14.7 L 15 14.7 L 8.1 5.7 L 1.2 14.7 L 5.1 14.7 C 5.1 20 9.4 24.3 14.7 24.3 L 20.7 24.3 C 19.45 24.25 18.22 23.95 17.1 23.4 C 21.37 22.68 24.52 19.03 24.6 14.7 L 24.6 5.7 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3" stroke-miterlimit="10" pointer-events="all"></path></g></g><g></g><g></g></g>`
        }
      ]
    },
    {
      name: 'UML',
      label: 'UML',
      lang: 'L10306',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'BPMN-General',
      label: 'BPMN General',
      lang: 'L10307',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'flowchart',
      label: 'Flowchart',
      lang: 'L10308',
      icon: '',
      enable: false,
      children: []
    },
    {
      name: 'clipart',
      label: 'Clipart',
      lang: 'L10309',
      icon: '',
      enable: false,
      children: []
    }
  ]
  let materials = []
  if (enableMaterials && enableMaterials instanceof Object && Object.keys(enableMaterials).length) {
    Object.entries(enableMaterials).forEach(item => {
      const [ name, types ] = item
      if (defMaterials.find(target => target.name === name)) {
        const materialItem = defMaterials[name]
        materialItem.children = materialItem.children.filter(child => types.includes(child.name))
        materials.push(materialItem)
      }
    })
  } else {
    materials = defMaterials
  }

  return materials
}
