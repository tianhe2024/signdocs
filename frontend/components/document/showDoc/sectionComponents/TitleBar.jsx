import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ButtonBar from './ButtonBar';

const TitleBar = ({
  doc,
  history,
  actions: {
    deleteDocument,
    // fetchSignedUrl
  },
}) => {
  const {
    title,
    owner,
    isOwner,
    status = 'In Progress',
    sent = '',
    updatedAt,
  } = doc;
  const updatedAtText = moment(updatedAt).format('M/D/YYYY | hh:mm:ss a');
  const ownerText = `${owner.firstName} ${owner.lastName}`;

  return (
    <div className="flex-col-container doc-show-header">
      <h2 className="flex-item-left">{title}</h2>
      {isOwner ? (
        <p className="flex-item flex-item-left">From:&nbsp;{ownerText}</p>
      ) : null}

      <p className="flex-item flex-item-left">
        Last change on&nbsp;{updatedAtText}
      </p>
      {sent && <p className="flex-item flex-item-left">Sent on&nbsp;{sent}</p>}
      <p className="flex-item flex-item-left status">{status}</p>
      <div className="action-buttons">
        <ButtonBar
          doc={doc}
          isOwner={isOwner}
          deleteDocument={deleteDocument}
          history={history}
        />
      </div>
    </div>
  );
};

TitleBar.propTypes = {
  doc: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isOwner: PropTypes.bool,
    owner: PropTypes.string,
    status: PropTypes.string,
    sent: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
  actions: PropTypes.shape({
    deleteDocument: PropTypes.func,
    fetchSignedUrl: PropTypes.func,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default TitleBar;
