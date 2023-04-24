import './miscComponents.css'

const TitleBar = props => {
  return(
    <div className='titleBar'>
      <b style={{marginRight: '20px'}}>{props.title}</b>
      <p style={{fontSize: '16pt', margin: '0px', alignSelf:'flex-end', paddingBottom: '5px'}}>{props.subtitle}</p>
    </div>
  );
};

const ActionButton = props => {
  return(
    <a href={props.href}>
      <button className='actionButton'>
        {props.text}
      </button>
    </a>
  );
}

export { TitleBar, ActionButton };
