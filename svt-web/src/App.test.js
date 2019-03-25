// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () : void => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
// useViewport.test.js
import React from 'react'
import { render } from 'react-testing-library'

import useViewport from './useViewport'
// simulate window resize
function fireResize(width) {
    window.innerWidth = width
    window.dispatchEvent(new Event('resize'))
}
// Test component that uses the Hook
function EffecfulComponent() {
    const viewport = useViewport()
    return <span>{viewport}</span>
}

test('useViewport listen to window resize and set viewport size responsively', () => {
    const { container, rerender } = render(<EffecfulComponent />)
    const span = container.firstChild

    fireResize(320)

    // useEffect is triggered after rendering.
    // So we want to rerender the component to see the state change
    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('extra-small')
    fireResize(600)

    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('small')
    fireResize(800)

    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('medium')

    fireResize(1000)

    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('large')

    fireResize(1280)

    rerender(<EffecfulComponent />)
    expect(span.textContent).toBe('extra-large')
})
*/
