import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AutoComplete } from '@progress/kendo-react-dropdowns';

class AppComponent extends React.Component {
    data = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan","father" ];
    state = { value: '' };

    onChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="example-wrapper">
                <AutoComplete
                    data={this.data}
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="e.g. Andorra"
                />
            </div>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.querySelector('my-app')
);
