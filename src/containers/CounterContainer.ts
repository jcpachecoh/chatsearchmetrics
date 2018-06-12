import { connect } from 'react-redux';
import { Counter, CounterProps } from '../components/Counter';

export type ConnectedStateProps = Pick<CounterProps, 'allMessages'>;

export function mapStateToProps({ chatReducer: { allMessages } }: any): ConnectedStateProps {
    return {
        allMessages
    };
}

export default connect(mapStateToProps, null)(Counter);