import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ProviderWrapperProps } from '../model/ProviderWrapperProps'

export const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
    return <Provider store={store}>{children}</Provider>
}
