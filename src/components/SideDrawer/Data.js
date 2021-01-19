import BuildIcon from '@material-ui/icons/Build';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
// import ControlForm from '../../pages/ControlForm/ContorlForm';
// import Display from '../../pages/Display/Display';
// import AutoControl from '../../pages/AutoControl/AutoControl';
// import TimeLapse from '../../pages/TimeLapse/TimeLapse';
//建立path 列表名稱 icon data
export const stockData = [
  { 
    label: '手動操作',
    to: '/ContorlForm',
    icon: BuildIcon,
  },
  {
    label: '各項數據',
    to: 'Display', 
    icon: AssignmentOutlinedIcon,
  },
  { 
    label: '縮時錄影',
    to: 'TimeLapse',
    icon: CameraAltIcon,
  },
  { 
    label: '自動操作',
    to: 'AutoControl',
    icon: InvertColorsIcon,
  },
];
// import BuildIcon from '@material-ui/icons/Build';
// import InvertColorsIcon from '@material-ui/icons/InvertColors';
// import CameraAltIcon from '@material-ui/icons/CameraAlt';
// import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
// import ControlForm from '../../pages/ControlForm/ContorlForm';
// import Display from '../../pages/Display/Display';
// import AutoControl from '../../pages/AutoControl/AutoControl';
// import TimeLapse from '../../pages/TimeLapse/TimeLapse';


// const pathIds = {
//   ControlForm: "ControlForm",
//   Display: "Display",
//   Autocontrol: "Autocontrol",
//   TimeLapse: "TimeLapse"
// };

// const pathRouting = {
//   ControlForm: "/ControlForm",
//   Display: "/Display",
//   AutoControl: "/AutoControl",
//   TimeLapse: "/TimeLapse"
// };

// const pageRoutes = {
//   [pathIds.ControlForm]: {
//     path: pathRouting.ControlForm,
//     sidebarName: "手動操作",
//     icon: BuildIcon,
//     element: ControlForm
//   },
//   [pathIds.Display]: {
//     path: pathRouting.Display,
//     sidebarName: "各項數據",
//     icon: AssignmentOutlinedIcon,
//     component: Display
//   },
//   [pathIds.AutoControl]: {
//     path: pathRouting.AutoControl,
//     sidebarName: "自動操作",
//     icon: InvertColorsIcon,
//     noRender: false,
//     component: AutoControl
//   },
//   [pathIds.TimeLapse]: {
//     path: pathRouting.TimeLapse,
//     sidebarName: "縮時錄影",
//     icon: CameraAltIcon,
//     noRender: true,
//     component: TimeLapse
//   },
// };

// export { pageRoutes, pathIds, pathRouting };
