import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Button, PageContainer, HeaderContainer, HeaderTitle, HeaderSubtitle, Footer, Navigation, NavigationButton, Typography, typoTypeEnum } from 'fissy-ui';

const WelcomePage = () => {
  return (<div style={{textAlign:"center"}}>
    <h1>Welcome to the <b>Fiscy UI</b> documentation</h1>
    <p>You can find all the available component on the sidebar, and we also have some example pages built for you.</p>
  </div>)
}

const ColorPage = () => {
  const colors = [
      {name: "background", hex: "#bdc7c3"},
      {name: "darkBlue", hex: "#233b45"},
      {name: "mediumBlue", hex: "#607376"},
      {name: "lightBlue", hex: "#9daba9"},
      {name: "lightGreen", hex: "#cad2cc"},
      {name: "mediumGreen", hex: "#adbeb4"},
      {name: "darkGreen", hex: "#a4b3a6"},
      {name: "darkestGreen", hex: "#8a9894"},
  ]

  return (<>
    <h1>Color palette</h1>

    {colors.map((color)=>(
      <div style={{width: "100px", height: "100px", background: color.hex, border: "1px solid", margin: 10, display: "inline-block"}}>
        <span style={{marginTop: "100%"}}>{color.name}</span>
      </div>
    ))}
  </>)
}

const ExamplePage01 = () => {
  const [activeNav, setActiveNav] = useState(0);
  
  const handleOnClick = (id) => {
    setActiveNav(id);
  }

  const navConfig = [
    { title: "Biometric id", onClick: handleOnClick },
    { title: "body", onClick: handleOnClick },
    { title: "face", onClick: handleOnClick },
    { title: "background", onClick: handleOnClick }
  ]

  return (<PageContainer gradient>
    <HeaderContainer>
      <HeaderTitle label="Argos extractors"/>
      <HeaderSubtitle label="record locator"/>
      <Navigation config={navConfig} active={activeNav}/>
    </HeaderContainer>
    <div style={{height: 380,}}></div>
    <Footer>
      <Typography type={typoTypeEnum.title}>Employee number:&nbsp;</Typography>
      <Typography>12321-12341234-12341234</Typography>
    </Footer>
    </PageContainer>)
}

const App = () => {
  const [active, setActive] = useState({component: WelcomePage});

  const docs = [
    {
      type: "page",
      title: "Welcome",
      name: "welcomepage",
      component: WelcomePage
    },
    {
      type: "page",
      title: "Colors",
      name: "colorspage",
      component: ColorPage
    },
    {
      type: "comp",
      title: "PageContainer",
      name: "pagecont",
      description: "Page Container act as a theme provider, as it inject the color palette for the rest of the components, also introduce a toggleable overlay to give some gradient to the otherwise solid color elements.",
      component: PageContainer,
      exampleCode: "<PageContainer><div>content</div></PageContainer>",
      exampleProps: {
        children: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
        gradient: true,
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "children dom elements"
        },
        {
          name: "gradient",
          type: "boolean",
          desc: "can turn off the ovelay (default: true)"
        }
      ]
    },
    {
      type: "comp",
      title: "HeaderContainer",
      name: "header",
      description: "Header container provide the basic layout for the header, require HeaderTitle, HeaderSubtitle and/or Navigation components for full purpose",
      component: HeaderContainer,
      exampleCode: "<HeaderContainer><HeaderTitle></HeaderTitle></HeaderContainer>",
      exampleProps: {
        children: "empty"
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "children dom elements"
        }
      ]
    },
    {
      type: "comp",
      title: "HeaderTitle",
      name: "headertitle",
      description: "Header main title component",
      component: HeaderTitle,
      exampleCode: "<HeaderContainer><HeaderTitle label='title'/></HeaderContainer>",
      exampleProps: {
        label: "page title"
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "title of the page"
        }
      ]
    },
    {
      type: "comp",
      title: "HeaderSubtitle",
      name: "headersubtitle",
      description: "Header subtitle component",
      component: HeaderSubtitle,
      exampleCode: "<HeaderContainer><HeaderSubtitle label='subtitle'/></HeaderContainer>",
      exampleProps: {
        label: "page subtitle"
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "title of the page"
        }
      ]
    },
    {
      type: "comp",
      title: "Navigation",
      name: "navigation",
      description: "Navigation component consist of a container element and a list of NavigationButton components created from the config object. The configuration should be an array of object, each object should contain a title field with a string, and an onClick function. The onClick will return a number. The other prop of navigation is the active prop, what takes a number, and it makes the button with the number active.",
      component: Navigation,
      exampleCode: "<Navigation config={[{title:'title', onClick:(id)=>{}}]} active={1}/>",
      exampleProps: {
        config: [{title: "button1", onClick:(id)=>{alert(id)}}, {title: "button2", onClick:(id)=>{alert(id)}}, {title: "button3", onClick:(id)=>{alert(id)}}],
        active: 0
      },
      props: [
        {
          name: "config",
          type: "object",
          desc: "configuration object for navigation"
        },
        {
          name: "active",
          type: "number",
          desc: "active button number"
        }
      ]
    },
    {
      type: "comp",
      title: "NavigationButton",
      name: "navigationbutton",
      description: "Navigation button",
      component: NavigationButton,
      exampleCode: "<NavigationButton label='buttonLabel' onClick={()=>{}}/>",
      exampleProps: {
        label: "buttonLabel",
        isActive: false,
        onClick: ()=>{alert("click")}
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "Button label"
        },
        {
          name: "isActive",
          type: "boolean",
          desc: "Button status"
        },
        {
          name: "onClick",
          type: "function",
          desc: "click handler"
        }
      ]
    },
    {
      type: "comp",
      title: "Footer",
      name: "footer",
      description: "Page footer, accepts any dom elements, but designed for only typography",
      component: Footer,
      exampleCode: "<Footer>children dom elemenets</Footer>",
      exampleProps: {
        children: "empty"
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "children dom elements"
        }
      ]
    },
    {
      type: "comp",
      title: "Typography",
      name: "typo",
      description: "Typography element, to standardize usage of text content",
      component: Typography,
      exampleCode: "<Typography type={typoTypeEnum.default}>content</Typography>",
      exampleProps: {
        children: "content"
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "content of the typography"
        }
      ]
    },
    {
      type: "comp",
      title: "Button1",
      name: "button1",
      description: "Button for some glorious purpose",
      component: Button,
      exampleCode: "<Button label='testButton' onClick={()=>{alert('Click')} }/>",
      exampleProps: {
        label: "example button",
        onClick: ()=>{alert("Click")}
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "button label"
        },
        {
          name: "onClick",
          type: "function",
          desc: "on click event handler function"
        }
      ]
    },
    {
      type: "example",
      title: "Example page",
      name: "page1",
      description: "Example page",
      component: ExamplePage01
    }
  ]

  const handleOpenDoc = (docName) => {
    const comp = docs.filter((item)=>item.name === docName);
    setActive(comp[0]);
  }

  return (
    <>
    {/* HEADER */}
      <div style={{height: 50, background: "#60a2d1", padding: "0 15px", alignItems:"center", display: "flex",}}>
        <span style={{fontSize: 24, fontWeight:"bold",}} onClick={()=>{setActive(welcomePage)}}>Fiscy UI</span>
      </div>
      {/* CONTENT */}
      <div className="container-fluid">
          
          {/* LEFT SIDEBAR */}
          <div className="row" style={{minHeight: "calc(100vh - 50px)",}}>
            <div className="col" style={{flexBasis: 150, flexGrow: 0, overflow:"hidden", borderRight: "2px solid #718093", }}>

              {/* INFO */}
              {docs.filter((item)=>item.type === "page").map((item, id)=>(<button key={`page${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              {/* COMPONENTS */}
              <h5 style={{marginTop: 10}}>Components</h5>
              {docs.filter((item)=>item.type === "comp").map((item, id)=>(<button key={`component${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              
              {/* EXAMPLES */}
              <h5>Examples</h5>
              {docs.filter((item)=>item.type === "example").map((item, id)=>(<button key={`example${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
            </div>


            {/* PREVIEW */}
            <div className="col">
              {active && (<>
                {active.type !== "page" && <h1>{active.title}</h1>}
                <p>{active.description}</p>
                <pre>{active.exampleCode}</pre>
                
                {active.component && (<active.component {...active.exampleProps} />)}
              </>)}
            </div>


            {/* RIGHT SIDEBAR */}
              {active && active.exampleProps && (
              <div className="col" style={{flexBasis: 200, flexGrow: 0, overflow:"hidden", borderLeft: "2px solid #718093", }}>
                  <h5 style={{marginTop: 10}}>Props</h5>
                  {active.props && active.props.map((pr)=>{
                    if (pr.type==="string"){
                      return (
                      <>
                        <span style={{display: "block", fontSize: 12, marginTop: 4}}>{pr.name}</span>
                        <input className="form-control" onChange={(e)=>{setActive({...active, exampleProps: {...active.exampleProps, [pr.name]: e.target.value}})}} defaultValue={active.exampleProps[pr.name]}/>
                      </>)
                    }
                    else if (pr.type==="number"){
                      return (
                      <>
                        <span style={{display: "block", fontSize: 12, marginTop: 4}}>{pr.name}</span>
                        <input type="number" className="form-control" onChange={(e)=>{setActive({...active, exampleProps: {...active.exampleProps, [pr.name]: Number(e.target.value)}})}} defaultValue={active.exampleProps[pr.name]}/>
                      </>)
                    }
                    else if (pr.type==="boolean"){
                      return (
                      <>
                        <span style={{display: "block", fontSize: 12, marginTop: 4}}>{pr.name}</span>
                        {/* <p>{JSON.stringify(pr.exampleProps)}</p> */}
                        <input type="checkbox" onChange={(e)=>{setActive({...active, exampleProps: {...active.exampleProps, [pr.name]: e.target.checked}})}} checked={active.exampleProps[pr.name]}/>
                      </>)
                    }
                    else{
                      return(<>
                        <span style={{display: "block", fontSize: 12}}>{pr.name}</span>
                        <p>{pr.type}</p>
                      </>)
                    }
                  })}
                </div>)}
          </div>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
