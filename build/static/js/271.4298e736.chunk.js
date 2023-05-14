"use strict";(self.webpackChunkfigma_react_boilerplate=self.webpackChunkfigma_react_boilerplate||[]).push([[271],{2122:function(e,t,s){s(2791);var i=s(184),a=function(e){var t=e.children,s=e.onClick,a=e.isActive,r=e.isSubmit,n="cursor-pointer font-medium px-4 py-2 rounded-md text-sm w-40",l="".concat(n," bg-gradient"),c="".concat(n," bg-teal_900"),o="".concat(n," text-teal_400 text-[#17FFA6] border-[2px] border-[#17FFA6] bg-gray_900");return(0,i.jsx)("button",{className:r?a?l:c:o,onClick:function(e){s()},children:t})};a.defaultProps={isActive:!1},t.Z=a},5936:function(e,t,s){s.d(t,{Z:function(){return o}});s(2791);var i=s(3264),a=s(184),r=function(e){var t=e.item,s=e.locked,r=e.addToList,n=e.removeFromList,l=e.updateTech,c=e.className,o=e.addedList,m=e.multipleSelection,d=e.selectedTech;return(0,a.jsx)(a.Fragment,{children:s?(0,a.jsxs)("div",{className:"bg-gray_901".concat(" ",c),children:[(0,a.jsxs)("div",{className:"flex flex-row gap-[20px] items-start justify-between w-[100%]",children:[(0,a.jsx)(i.Ei,{src:t.src,className:"".concat(s?"grayscale":null," h-[106px] mt-[16px] w-[106px]"),alt:"location"}),s?(0,a.jsx)(i.Ei,{src:"images/img_lock_gray_300.svg",className:"h-[24px] w-[24px]",alt:"lock"}):null]}),(0,a.jsx)(i.xv,{className:"".concat(s?"text-gray_801":"text-gray_50"," font-inter font-semibold text-center text-gray_50 w-[auto]"),as:"h6",variant:"h6",children:null===t||void 0===t?void 0:t.name})]}):(0,a.jsxs)("div",{className:"".concat(m?o.find((function(e){return e.name===(null===t||void 0===t?void 0:t.name)}))?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901":d.name===t.name?"bg-bluegray_906 border-[2px] border-solid border-teal_A400":"bg-gray_901"," ").concat(c,"}"),onClick:function(){m?function(e){o.find((function(t){return t.name===e.name}))?(n(e),l("")):(r(e),l(e))}(t):l(t)},children:[(0,a.jsx)(i.Ei,{src:t.src,className:"h-[98px] w-[auto]",alt:"globe"}),(0,a.jsx)(i.xv,{className:"font-inter font-semibold text-gray_50 text-left w-[auto]",as:"h6",variant:"h6",children:t.name})]})})};r.defaultProps={name:"React",src:"images/img_globe_light_blue_300.svg",locked:!1};var n=r,l=function(e){var t=e.selectedTech,s=e.rhsDescription;return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-gray_901 flex md:flex-1 flex-col items-start justify-center mb-[128px] p-[24px] sm:px-[20px] md:w-[100%] w-[70%]",children:[(0,a.jsx)(i.xv,{className:"font-semibold mt-[6px] text-gray_50 text-left w-[auto]",as:"h4",variant:"h4",children:t.name}),(0,a.jsx)(i.xv,{className:"font-normal leading-[150.00%] mt-[19px] not-italic text-gray_300 text-left",as:"h6",variant:"h6",children:(0,a.jsxs)(a.Fragment,{children:[t.description1,(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),t.description2,(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),t.description3]})})]})}):(0,a.jsx)("div",{className:"bg-gray_901 flex md:flex-1 items-center justify-start mb-[128px] p-[128px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[60%]",children:(0,a.jsx)(i.xv,{className:"font-normal leading-[150.00%] my-[160px] not-italic text-center text-gray_501 w-[100%]",as:"h6",variant:"h6",children:s})})})},c=function(e){var t=e.title,s=e.description,r=e.rhsDescription,c=e.techList,o=e.updateTech,m=e.selectedTech,d=e.multipleSelection,u=e.addToList,x=e.addedList,p=e.removeFromList;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[20px] items-start justify-start w-[100%]",children:[(0,a.jsx)("div",{className:"flex items-start justify-start w-[100%]",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[4px] items-start justify-start w-[100%]",children:[(0,a.jsx)(i.xv,{className:"font-medium text-gray_50 text-left w-[auto]",as:"h2",variant:"h2",children:t}),(0,a.jsx)(i.xv,{className:"font-normal not-italic text-gray_501 text-left w-[auto]",as:"h6",variant:"h6",children:s})]})}),(0,a.jsx)(i.x1,{className:"bg-gray_801 h-[1px] w-[100%]"})]})}),(0,a.jsxs)("div",{className:"flex md:flex-col flex-row gap-[17px] items-start justify-between w-[100%]",children:[(0,a.jsx)("div",{className:"flex md:flex-1 items-center justify-start md:mt-[0] mt-[24px] md:w-[100%] w-[48%]",children:(0,a.jsx)("div",{className:"sm:gap-[20px] gap-[24px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]",children:c.map((function(e,t){return(0,a.jsx)(n,{className:"cursor-pointer flex flex-1 flex-col h-[227px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]",item:e,updateTech:o,selectedTech:m,locked:null===e||void 0===e?void 0:e.locked,addToList:u,removeFromList:p,multipleSelection:d,addedList:x},t)}))})}),(0,a.jsx)(l,{selectedTech:m,rhsDescription:r})]})]})};c.defaultProps={multipleSelection:!1};var o=c},271:function(e,t,s){s.r(t);var i=s(885),a=s(2791),r=s(6871),n=s(9434),l=s(3264),c=s(5936),o=s(2122),m=s(6915),d=s(184);t.default=function(){var e=(0,n.v9)((function(e){var t;return null===(t=e.fullstack.fullstack_details)||void 0===t?void 0:t.database})),t=(0,r.s0)(),s=(0,a.useState)(e),u=(0,i.Z)(s,2),x=u[0],p=u[1],g=(0,n.I0)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"flex flex-1 flex-col gap-[32px] items-center justify-start md:mt-[0] mt-[32px] md:px-[20px] w-[100%]",children:[(0,d.jsx)("div",{className:"flex flex-col items-center justify-start w-[100%]",children:(0,d.jsx)(c.Z,{choosen:"Database",techList:[{name:"MySQL",src:"images/img_reply.svg",description1:"Pharetra morbi libero id aliquam elit massa integer\n      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar\n      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas\n      est morbi mattis id in ac pellentesque ac.",description2:"Lectus id duis vitae porttitor enim gravida morbi.\n      Eu turpis posuere semper feugiat volutpat elit, ultrices\n      suspendisse. Auctor vel in vitae placerat.\n     \n      Suspendisse maecenas ac donec scelerisque diam sed est\n      duis purus.\n    \n      Elit nisi in eleifend sed nisi. Pulvinar at orci, proin\n      imperdiet commodo consectetur convallis risus. Sed\n      condimentum enim dignissim adipiscing faucibus consequat,\n      urna. Viverra purus et erat auctor aliquam.",description3:"Lectus id duis vitae porttitor enim gravida morbi.\n      Eu turpis posuere semper feugiat volutpat elit, ultrices\n      suspendisse. Auctor vel in vitae placerat.\n      Suspendisse maecenas ac donec scelerisque diam sed est\n      duis purus."},{name:"Open UI5",src:"images/img_group.png",description1:"Open UI5 morbi libero id aliquam elit massa integer\n      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar\n      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas\n      est morbi mattis id in ac pellentesque ac.",description2:"Open UI5 morbi libero id aliquam elit massa integer\n      tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar\n      ullamcorper sit dictumst ut eget a, elementum eu. Maecenas\n      est morbi mattis id in ac pellentesque ac."},{name:"PostgreSQL",src:"images/img_location_black_900_90x90.svg",description1:"PostgreSQL description"},{name:"JDBC",src:"images/img_fire.svg",description1:"JDBC description",locked:!0},{name:"MongoDB",src:"images/img_location_light_green_601.svg",description1:"MongoDB description"},{name:"DynamoDB",src:"images/img_user_cyan_901.svg",description1:"DynamoDB description"}],updateTech:function(e){p(e)},selectedTech:x,title:"Select Database",description:"Choose the database you want your project to build in",rhsDescription:"Select a Database to see it\u2019s Features"})}),(0,d.jsxs)("div",{className:"flex flex-col gap-[16px] items-start justify-start w-[100%]",children:[(0,d.jsx)(l.x1,{className:"bg-gray_801 h-[1px] w-[100%]"}),(0,d.jsx)("div",{className:"flex items-start justify-end w-[100%]",children:(0,d.jsxs)("div",{className:"flex flex-row gap-[12px] items-center justify-center pr-2",children:[(0,d.jsx)(o.Z,{onClick:function(){return t(-1)},children:"Previous"}),(0,d.jsx)(o.Z,{isActive:x,onClick:function(){return x?(g((0,m._p)(x)),void t("/capabilitiestwo")):null},children:"Next",isSubmit:!0})]})})]})]})})}}}]);
//# sourceMappingURL=271.4298e736.chunk.js.map