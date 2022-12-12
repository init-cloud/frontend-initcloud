import ReactModal from "react-modal";
import styled, { keyframes } from "styled-components";
import CodeBlock from "./CodeBlock";

const modalShow = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`

const Modal = styled(ReactModal)`
  animation: ${modalShow} 0.2s;
  &::-webkit-scrollbar {
    width: 10px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E6E6E6;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }
`

const RuleId = styled.span`
  font-size: 24px;
  font-weight: bold;
`

const Status = styled.span`
  font-size: 20px;
  color: ${(props) => props.status};
  margin-left: 10px;
`

const Item = styled.span`
  font-size: 18px;
  font-weight: bold;
  span {
    font-size: 15px;
    font-weight : lighter;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: auto;
  margin-bottom: 20px;
`

function ResourceModal({ openModal, closeModal, data }) {
  const statusColor = {
    "passed": "rgb(46, 204, 113)",
    "failed": "rgb(231, 76, 60)"
  };
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.60)',
          zIndex: 2
        },
        content: {
          position: 'absolute',
          top: '30px',
          left: '400px',
          right: '400px',
          bottom: '30px',
          border: '1px solid rgba(46,54,80,.125)',
          background: '#f5f8fb',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '1rem',
          outline: 'none',
          padding: '0px 20px',
          boxShadow: '0 0 8px 4px rgba(0,0,0,.1)'
        }
      }}
    >
      <h2>{data ? (data[0]?.target_resource ? data[0]?.target_resource : "There are no scan results for this resource.") : (null)}</h2>
      <hr />
      {data ? (data.map((detail, index) => (
        <Content key={index}>
          <RuleId>
            {detail.rule_id}
            <Status status={statusColor[detail.status]}>{detail.status}</Status>
          </RuleId>
          <Item>Description : <span>{detail.description}</span></Item>
          <Item>Lines : <span>{detail.lines}</span></Item>
          <Item>Level : <span>{detail.level}</span></Item>
          <Item>Target Resource : <span>{detail.target_resource}</span></Item>
          <Item>Target File : <span>{detail.target_file}</span></Item>
          {detail.detail !== 'No' ? (
            <>
              <Item style={{ textAlign: "center", fontSize: "25px", marginTop: "20px" }}>Detail</Item>
              <CodeBlock code={detail.detail} />
            </>
          ) : (
            null)}
        </Content>
      ))
      ) : (
        <h1>No Data</h1>
      )}
    </Modal >
  );
}

export default ResourceModal;
ReactModal.setAppElement('#root')