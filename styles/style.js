import { Divider, Grid, Typography } from "@material-ui/core";
import { Slider } from "@material-ui/core";
import styled from "styled-components";
// import {
//   nobel,
//   neroGray,
//   midnightExpress,
//   codGray,
//   white
// } from 'tcp-common/lib/colors'
// import { Button } from 'tcp-common/lib/components/WidgetsR3/HorizontalCarouselList1/styles'
// import { Close, Information } from 'tcp-common/lib/svg'
// import Flex from 'tcp-common/lib/components/Flex'

export const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const CardWrapper = styled.div`
  width: 100%;
  background: #1e1e1e;
  @media (min-width: 768px) {
    border-radius: 8px;
  }
`;

export const CreditCardWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  width: 360px;
  height: 232px;
  background: ${({ creditCardImage }) =>
    `url("${creditCardImage}") no-repeat center center`};
  background-size: cover;
  @media (min-width: 768px) {
    margin: 16px auto;
  }
`;

const CreditCardInfo = styled.div`
  position: absolute;
  left: 16px;
`;

// export const ExpiryDate = styled(CreditCardInfo)`
//   font-weight: 600;
//   bottom: 20%;
// `;

export const ViewDetailsButton = styled.div`
  bottom: 64px;
  position: absolute;
  left: 110px;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ isMassAffluentCard }) =>
    isMassAffluentCard ? "white" : "#1E1E1E"};
`;

export const ModalContainer = styled.div`
  @media (min-width: 768px) {
    margin: 24px;
  }
`;

export const ModalHeader = styled.div`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 24px 16px 8px;
  }
`;

export const CloseButton = styled.span`
  position: sticky;
  right: 30px;
  float: right;
`;

export const DrawerContent = styled.div`
  margin: 8px 16px;
  overflow: auto;
`;

export const DividerLine = styled(Divider)`
  padding: 0 12px;
`;

export const PhoneWrapper = styled.div`
  position: relative;
  margin: 16px 0;
  display: flex;
`;

export const PhoneCallIcon = styled.img.attrs(({ src }) => ({
  height: "32px",
  src,
}))`
  margin-right: 20px;
`;

export const PhoneCallLabelText = styled.span`
  font-size: 18px;
  display: inline-block;
  position: absolute;
  top: 8px;
  left: 46px;
  text-decoration-line: underline;
`;

export const CustomSwitchLabel = styled.span`
  font-size: 20.5px;
  display: inline-block;
`;

export const SettingsWrapper = styled(Grid).attrs(() => ({
  container: true,
  justifyContent: "space-between",
  alignItems: "center",
  spacing: 3,
}))`
  margin-top: 16px;
`;
export const SettingsDescription = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  color: #a1a1a1;
`;
export const SettingsTitle = styled(Typography).attrs(() => ({
  variant: "h6",
}))``;

export const HeaderDescription = styled.span`
  color: #a1a1a1;
  display: block;
  margin: 63px 0 0 16px;
  font-size: 18px;
  line-height: 24px;
  @media (min-width: 768px) {
    margin: 4px 0 0;
  }
`;
export const HeaderTitle = styled.div`
  position: relative;
  height: 64px;
  z-index: 1;
  background: #2b2d35;
  width: 100%;
  padding: 16px;
  top: 0;
  display: flex;
`;

export const Title = styled.span`
  margin-left: 16px;
  font-size: 24px;
  line-height: 32px;
`;

export const ActionWrapper = styled.div`
  margin-top: ${({ showRedirectChanges }) =>
    showRedirectChanges ? "80px" : "16px"};
`;

export const TrackingCardButton = styled.div`
  text-decoration: underline;
  color: #a1a1a1;
`;

export const TrackingCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  cursor: pointer;
`;

export const OtpTitleWrapper = styled.div`
  padding: 0 24px;
  text-align: center;
`;

export const ResendCodeWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

export const DesktopWrapper = styled.div`
  background: #171717;
  box-shadow: 0 0 9px 3px rgba(0, 0, 0, 0.16215);
  border-radius: 16px;
  padding: 24px;
  width: 629px;
  position: static;
  margin-bottom: 90px;
  display: flex;
`;
export const SaveButton = styled.div`
  width: "unset";
`;

export const Brand = styled.div`
  margin-top: ${({ showRedirectChanges }) =>
    showRedirectChanges ? "16px" : "36px"};
`;

export const CardDrawerHeaderText = styled.span`
  font-size: 18px;
  display: inline-block;
`;
export const OtpTitle = styled.span`
  font-size: 18px;
  display: inline-block;
`;

export const InfoIcon = styled.span`
  margin: 10px 0 0 10px;
  cursor: pointer;
`;

export const TooltipText = styled.p`
  text-align: left;
  position: relative;
  right: 10px;
`;

export const HeaderText = styled.div`
  font-size: 24px;
  line-height: 32px;
`;

export const TooltipWrapper = styled.div`
  float: ${({ isMobile }) => (isMobile ? "right" : "inherit")};
`;

export const SetupWrapper = styled.div`
  padding: 24px 16px;
  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    background: #171717;
    margin-top: 24px;
    padding: 0;
  }
`;
