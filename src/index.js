import './serviceWorker';
import './style.scss';
import * as iy from 'immensity';
import mouseEventPropsList from './mouseEventProps.json';

console.clear();

const mouseBox = document.querySelector('[data-js=mouse-box]');
const eventContent = document.querySelector('[data-js=event-content]');
const eventPropsButtons = document.querySelector(
  '[data-js=event-props-buttons]'
);
const eventPropsPositions = document.querySelector(
  '[data-js=event-props-positions]'
);
const immensityMouseEvent = document.querySelector(
  '[data-js=immensity-mouse-event]'
);

mouseBox.addEventListener('mousedown', handleEvent);
mouseBox.addEventListener('contextmenu', iy.handleContextMenu);

function handleEvent(e) {
  console.log('event: ', e);

  e.preventDefault();
  eventContent.classList.remove('hidden');

  const output = iy.handleMouseEvent()(e);

  addToIndexHTLM(e, output);
}

function addToIndexHTLM(event, output) {
  eventPropsButtons.innerHTML = mouseEventPropsList.buttons
    .map(
      prop => /* html */ `
    <tr>
      <td>${prop}</td>
      <td>${event[prop]}</td>
    </tr>
  `
    )
    .join('');

  eventPropsPositions.innerHTML = mouseEventPropsList.positions
    .map(
      prop => /* html */ `
    <tr>
      <td>${prop}</td>
      <td>${event[prop]}</td>
    </tr>
  `
    )
    .join('');

  immensityMouseEvent.innerHTML = /* html */ `
    <strong>${output}</strong>
  `;
}
