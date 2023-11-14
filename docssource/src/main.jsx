import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'fissy-ui';

const WelcomePage = () => {
  return (<div style={{textAlign:"center"}}>
    <h1>Welcome to the <b>Fischy UI</b> documentation</h1>
    <p>You can find all the available component on the sidebar, and we also have some example pages built for you.</p>
  </div>)
}

const ExamplePage01 = () => {
  return (<div style={{border: "1px solid",}}>
    <h1>Example page component example</h1>
  </div>)
}

const App = () => {
  const welcomePage = {component: WelcomePage}
  const [active, setActive] = useState(welcomePage);

  const docs = [
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
      type: "comp",
      title: "Button2",
      name: "button2",
      description: "Button for some glorious purpose",
      component: Button,
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
              {/* COMPONENTS */}
              <h5 style={{marginTop: 10}}>Components</h5>
              {docs.filter((item)=>item.type === "comp").map((item)=>(<button type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
              
              {/* EXAMPLES */}
              <h5>Examples</h5>
              {docs.filter((item)=>item.type === "example").map((item)=>(<button type="button" className="btn btn-link btn-sm" onClick={()=>{handleOpenDoc(item.name)}}>{item.title}</button>))}
            </div>


            {/* PREVIEW */}
            <div className="col">
              {active && (<>
                <h1>{active.title}</h1>
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
                        <span style={{display: "block", fontSize: 12}}>{pr.name}</span>
                        <input className="form-control" onChange={(e)=>{setActive({...active, exampleProps: {...active.exampleProps, [pr.name]: e.target.value}})}} defaultValue={active.exampleProps[pr.name]}/>
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
