import{u,j as r,a as e,T as d,e as g,t as h}from"./vendor.c6f39698.js";/* empty css                          */const p="_container_1xu4w_1",b="_row_1xu4w_16",v="_col6_1xu4w_26",_="_errorMessage_1xu4w_43";var s={container:p,row:b,col6:v,errorMessage:_};function x(){const{register:t,formState:{errors:a},handleSubmit:o,reset:l}=u(),i=()=>{h("Form sent! I will get back to you as soon as I can.",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"})},m=async c=>{try{const n={name:c.name,email:c.email,subject:c.subject,message:c.message};await g.send("service_5w8nrq5","template_h40qogm",n,"user_AlbAxO4SdI9y7DPgDoNOp"),l(),i()}catch(n){console.log(n)}};return r("div",{id:"contact",className:"section "+s.container,children:[e("h1",{children:"Contact"}),r("form",{id:"contact-form",onSubmit:o(m),noValidate:!0,children:[r("div",{className:s.row,children:[r("div",{className:s.col6,children:[e("input",{type:"text",...t("name",{required:{value:!0,message:"Please enter a name"},maxLength:{value:30,message:"Please use 30 characters or less"}}),placeholder:"Name"}),a.name&&e("span",{className:s.errorMessage,children:a.name.message})]}),r("div",{className:s.col6,children:[e("input",{type:"email",...t("email",{required:{value:!0,message:"Please enter an email"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}}),placeholder:"Email address"}),a.email&&e("span",{className:s.errorMessage,children:a.email.message})]})]}),e("div",{className:s.row,children:r("div",{children:[e("input",{type:"text",...t("subject",{required:{value:!0,message:"Please enter a subject"},maxLength:{value:75,message:"Subject cannot exceed 75 characters"}}),placeholder:"Subject"}),a.subject&&e("span",{className:s.errorMessage,children:a.subject.message})]})}),e("div",{className:s.row,children:r("div",{children:[e("textarea",{rows:3,name:"message",...t("message",{required:{value:!0,message:"Please enter a message"}}),placeholder:"Message"}),a.message&&e("span",{className:s.errorMessage,children:"Please enter a message"})]})}),e("button",{type:"submit",children:"Submit"})]}),e(d,{})]})}export{x as default};
