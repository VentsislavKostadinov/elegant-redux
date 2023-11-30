import { App } from './App'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/store'

describe('Render App correctly', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <App />
            </Provider>,
        )
        expect(asFragment).toMatchSnapshot()
    })
})
