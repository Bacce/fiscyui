import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { 
  PageContainer,
  HeaderContainer,
  HeaderTitle,
  HeaderSubtitle,
  Footer,
  Navigation,
  NavigationButton,
  Typography,
  typoTypeEnum,
  Box,
  BoxInner,
  BoxTitle,
  Spacer,
  Table,
  ScrollingContainer,
  RadioButton,
} from 'fissy-ui';

const WelcomePage = () => {
  return (<div style={{textAlign:"center"}}>
    <h1>Welcome to the <b>Fiscy UI</b></h1>
    <p>You can find all the available component on the sidebar, and we also have some example pages built for you.<br/>
    The designs are taken from here: <a href="https://interfaceingame.com/games/starfield/">https://interfaceingame.com/games/starfield/</a><br/>
    Currently focusing on the Character Creation pages<br/>
    If you are new here, you probably want to visit the examples first to see what this lib is capable of.</p>
  </div>)
}

const UsagePage = () => {
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
  <h1>Usage</h1>
  <p>This documentation uses Bootstrap 5 for css reset and layout, but the components themselves are not depend on Bootstrap in any way. But, there are some css related additions what makes bootstrap a good tool to use with the library, for example for keyboard navigation the highlight comes from bootstrap and it is working nicely.</p>
  <p>General rule is to wrap every page into the PageContainer, as it is not just gives you the overlay and background color, but also provide the css variables all the other component relies on.</p>

  <h2>Typography</h2>
  <p>The font used in the game is not a free one, feel free to load your own font, I'm currently using bootstraps default font, eg. the system default Sans-Serif font.</p>
  <p>This is not really figured out yet, I will add a custom font and investigate if any additional support is needed.</p>
  <p>The designs use multiple fonts, so I'm also planning to go that way.</p>
  <br />

  <h2>Colors</h2>
  <p>All the colors below have their corresponding css variable in the PageContainer component.</p>
  <p>I don't have a good rule of thumb here, follow the designs, go crazy.</p>
  <br />
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

    <div className="container">
      <div className="row" style={{padding: "10px 0"}}>
        <div className="col-4">
          <BoxTitle label="Traits: 3/3" />
          <Table>
            <tr>
              <td>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt=""  width="120"/>
                <span>Hero Worshipped</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt=""  width="120"/>
                <span>Spaced</span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt=""  width="120"/>
                <span>Taskmaster</span>
              </td>
            </tr>
          </Table>
          <Spacer size={30} />
        </div>

        <div className="col-6">
          <Spacer size={30} />
          <h3>Beast Hunter</h3>
          <p>From the Ashta of Akila to the Terrormorphs that plague the whole of the Settled Systems, hostile alien life abounds. You've learned the skills to track them, find them, and take them down.</p>
          <Spacer size={30} />
          <BoxTitle label="Starting skills" />
          <Spacer size={5} />
          <div className="row gx-2">
            <div className="col-4">
              <Box>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt="" />
                <BoxTitle label="Fitness" />
                <BoxInner>
                  <Typography type={typoTypeEnum.small}>Lorem ipsum dolor sit amet, orem ipsum sit amet</Typography>
                  <Spacer size={10}/>
                </BoxInner>
              </Box>
            </div>

            <div className="col-4">
              <Box>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt="" />
                <BoxTitle label="ballistics" />
                <BoxInner>
                  <Typography type={typoTypeEnum.small}>Lorem ipsum dolor sit amet, orem ipsum sit amet Lorem ipsum dolor sit amet</Typography>
                  <Spacer size={10}/>
                </BoxInner>
              </Box>
            </div>

            <div className="col-4">
              <Box>
                <img src="https://www.pngall.com/wp-content/uploads/8/Sample-PNG-Image.png" alt="" />
                <BoxTitle label="gastronomy" />
                <BoxInner>
                  <Typography type={typoTypeEnum.small}>Lorem ipsum dolor sit amet, orem ipsum sit amet Lorem ipsum dolor sit amet</Typography>
                  <Spacer size={10}/>
                </BoxInner>
              </Box>
            </div>
          </div>
          <Spacer size={30} />
        </div>


        <div className="col-2">
          <ScrollingContainer>
            {['Beast Hunter', 'Bouncer', 'Bounty Hunter', 'Chef', 'Combat Medic', 'Cyber Runner', 'Cybernetics', 'Diplomat', 'Explorer', 'Gangster', 'Homesteader', 'Industrialist', 'Long Hauler', 'Pilgrim', 'Professor', 'Ronin'].map((label)=>(
              <RadioButton label={label} onClick={()=>{console.log(label)}}/>
            ))}
          </ScrollingContainer>
        </div>
      </div>
    </div>

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
      title: "Usage",
      name: "usagepage",
      component: UsagePage
    },
    {
      type: "example",
      title: "Example page",
      name: "page1",
      description: "",
      component: ExamplePage01
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
      title: "Box",
      name: "box",
      description: "Container element with border. It is designed to be used with the BoxInner component, where the title is outside.",
      component: Box,
      exampleCode: "<Box><BoxTitle label='title'/><BoxInner>content</BoxInner></Box>",
      exampleProps: {
        children: "content"
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "content of the box"
        }
      ]
    },
    {
      type: "comp",
      title: "BoxTitle",
      name: "boxtitle",
      description: "A very obvious title inside a box",
      component: BoxTitle,
      exampleCode: "<BoxTitle label='title'/>",
      exampleProps: {
        label: "content"
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "content of the boxTitle"
        }
      ]
    },
    {
      type: "comp",
      title: "Spacer",
      name: "spacer",
      description: "The components shouldn't take care of their own positioning, and instead of writing inline styles, you should use the Spacer component where non-standard spacing required.",
      component: BoxTitle,
      exampleCode: "<Spacer size={5}/>",
      exampleProps: {
        size: 5
      },
      props: [
        {
          name: "size",
          type: "number",
          desc: "Size of the spacer component"
        }
      ]
    },
    {
      type: "comp",
      title: "Table",
      name: "table",
      description: "Behave as a regular <table> DOM element, it contain some basic styling, so it should receive children as table elements",
      component: Table,
      exampleCode: "<Table><tr><td>table content</td></tr></Table>",
      exampleProps: {
        children: (<tr><td>Table content</td></tr>)
      },
      props: [
        {
          name: "children",
          type: "function",
          desc: "JSX content for the table"
        }
      ]
    },
    {
      type: "comp",
      title: "ScrollingContainer",
      name: "scrollCont",
      description: "This container element will take the parent components height as available vertical height, so the parent should be empty. And it will fill it instead of pushing the page to accomodate for it's content.",
      component: ScrollingContainer,
      exampleCode: "<ScrollingContainer>content of any kind</ScrollingContainer>",
      exampleProps: {
        children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, obcaecati. Incidunt enim, at vel eum dignissimos cum numquam porro magni amet quia nisi optio veniam nobis similique fugit aliquam pariatur."
      },
      props: [
        {
          name: "children",
          type: "string",
          desc: "JSX content of any kind"
        }
      ]
    },
    {
      type: "comp",
      title: "RadioButton",
      name: "radio",
      description: "Toggleable two-state button",
      component: RadioButton,
      exampleCode: "<RadioButton label='testButton' onClick={()=>{}}/>",
      exampleProps: {
        label: "Example button",
        onClick:()=>{alert('clicked')}
      },
      props: [
        {
          name: "label",
          type: "string",
          desc: "Label of the radio button"
        },
        {
          name: "onClick",
          type: "function",
          desc: "onClick callback"
        },
      ]
    },
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
          <div className="row" style={{height: "calc(100vh - 50px)", overflow: "hidden",}}>
            <div className="col" style={{flexBasis: 150, flexGrow: 0, overflow:"hidden", borderRight: "2px solid #718093", }}>

              {/* INFO */}
              <h5>Info</h5>
              {docs.filter((item)=>item.type === "page").map((item, id)=>(<button key={`page${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              {/* EXAMPLES */}
              <h5>Examples</h5>
              {docs.filter((item)=>item.type === "example").map((item, id)=>(<button key={`example${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              {/* COMPONENTS */}
              <h5 style={{marginTop: 10}}>Components</h5>
              {docs.filter((item)=>item.type === "comp").map((item, id)=>(<button key={`component${id}`} type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              
            </div>


            {/* PREVIEW */}
            <div className="col" style={{overflow: "auto", height: "100%",}}>
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