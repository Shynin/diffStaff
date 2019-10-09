import React from 'react';
import {ReactComponent as Loader} from './loader.svg';
import {ReactComponent as Gear} from './gear.svg';
import {ReactComponent as Triangle} from './triangle.svg';
import {ReactComponent as Close} from './close.svg';
// import  loader from './loader.svg';
// import  gear from './gear.svg';
// import  triangle from './triangle.svg';
// import  close from './close.svg';
import './App.css';
import Button from './components/button/Button'



function App() {
  return (
    <div className="App">
      <h2><span>Colors and Statuses:</span></h2>

      <Button color="primary" text="Primary" />
      <Button color="secondary" text="Secondary" />
      <Button color="danger" text="Danger" />
      <Button href="https://google.com" text="Link (non-styled)"/>

      <Button icon={{component: <Loader />, isLeft: false}} color="primary" text="Primary" />
      <Button icon={{component: <Loader />, isLeft: true}} color="secondary" text="Secondary" />
      <Button icon={{component: <Loader />, isLeft: true}} color="danger" text="Danger" />
      <Button icon={{component: <Loader />, isLeft: true}} href="https://google.com" text="Link (non-styled)" />

      <Button icon={{component: <Loader />, isLeft: true}} color="grey" text="Primary" disabled={true} />
      <Button icon={{component: <Loader />, isLeft: true}} color="grey" text="Secondary" disabled={true} />
      <Button icon={{component: <Loader />, isLeft: true}} color="grey" text="Danger" disabled={true} />
      <Button icon={{component: <Loader />, isLeft: true}} color="grey" text="Link (non-styled)" disabled={true} />

      <Button color="grey" text="Primary" disabled={true} />
      <Button color="grey" text="Secondary" disabled={true} />
      <Button color="grey" text="Danger" disabled={true} />
      <Button color="grey" text="Link (non-styled)" disabled={true} />

      <h2><span>Sizes:</span></h2>

      <Button size="l" color="primary" text="Primary" />
      <Button size="m" color="secondary" text="Secondary" />
      <Button size="s" color="danger" text="Danger" />

      <h2><span>Icons:</span></h2>

      <Button size="l" icon={{component: < Gear />, isLeft: true}} color="primary" text="Primary" />
      <Button size="m" icon={{component: < Triangle />, isLeft: true}} color="secondary" text="Secondary" />
      <Button size="s" icon={{component: < Close />, isLeft: true}} color="danger" text="Danger" />
        <br/>
      <Button size="s" icon={{component: < Gear />, isLeft: false}} color="primary" text="Primary" />
      <Button size="m" icon={{component: < Triangle />, isLeft: false}} color="secondary" text="Secondary" />
      <Button size="l" icon={{component: < Close />, isLeft: false}} color="danger" text="Danger" />
        <br/>
      <Button size="empty" icon={{component: < Gear />, isLeft: false}} color="primary" />
      <Button size="empty" icon={{component: < Triangle />, isLeft: false}} color="secondary" />
      <Button size="empty" icon={{component: < Close />, isLeft: false}} color="danger" />

      <h2><span>Custom view:</span></h2>

      <Button text="Magic button" style={{
        "background": "#d5fbd5",
        "border": "2px solid #26e226",
        "color": "#585858",
        "padding": "14px 45px"
      }} />
    </div>
  );
}

export default App;
