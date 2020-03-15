import React from 'react';
import { connect } from 'react-redux';

const Loading = ({ processing }) => {
    if (processing) {
        return (
            <Loading-Container>
                <div className="modal-open">
                    <div className="modal fade load-spinner show" style={{ paddingRight: "17px", display: "block" }} data-backdrop="static" data-keyboard="false" tabIndex="-1">
                        <div className="modal-dialog modal-sm" style={{
                            display: "table",
                            position: "relative",
                            margin: "0 auto",
                            top: "calc(33% - 24px)"
                        }}>
                            <div className="modal-content" style={{ width: "48px", backgroundColor: "transparent", border: "none" }}>
                                <div className="spinner-border" role="status" style={{ height: "15rem", width: "15rem" }}>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </div>

            </Loading-Container>
        )
    } return null;
};
Loading.defaultProps = {
    type: "spinner-border",
    size: ""
}
const mapStateToProps = state => ({ processing: state.processing })
export default connect(mapStateToProps)(Loading);