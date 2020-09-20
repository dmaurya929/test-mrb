import React, {useState} from 'react' ;
import Button from 'react-bootstrap/Button' ;
import Collapse from 'react-bootstrap/Collapse' ;
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function Transition() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open} onEnter = {() => console.log("just to expand")}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
          <div>
            <input type = "button" value = "display"/>
        </div>
        </div>
        
      </Collapse>
      <div style={{ width: 100, height: 'auto' }}>
        <ResponsiveEmbed aspectRatio="16by9">
            <embed type="image/svg+xml" src="https://deep-image.ai/extra/slider-3-a.a21f311c.jpg"/>
        </ResponsiveEmbed>
      </div>
        
      </>
    );
  }
  
  export default Transition ;