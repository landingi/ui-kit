export default Modal;
/**
 * Modal - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: modal
 * @param {function} props.onClick - onClick handler
 * @param {function} props.onAction - onAction click handler
 * @param {boolean} props.isActive - active state
 * @param {boolean} props.isClosable - close state
 * @param {boolean} props.isButtonDisabled - is action button in footer disabled
 * @param {boolean} props.isButtonLoading - is action button in footer has loading state
 * @param {boolean} props.isMarkAsSpamVisible - is "mark as spam" button visible
 * @param {object} props.image - image in header
 * @param {boolean} props.hasFooter - has footer
 * @param {boolean} props.hasHeaderDivider - has header divider
 * @param {boolean} props.hasFooterDivider - has footer divider
 * @param {string} props.actionVariant - button action variant
 * @param {bool} props.isLoading - is loading
 * @param {string} props.actionIcon - footer action button icon
 * @param {object} props.overflowStyle - overflowStyle
 * @param {bool} props.isCentered - makes text in modal centered
 * @param {bool} props.isEditable - isEditable
 * @param {func} props.onEdit - onEdit
 * @param {bool} props.hasCustomButton - secondary button
 * @param {func} props.onClickCustomButton - secondary button with custom callback
 * @param {bool} props.isCustomButtonDisabled - is cunstom button in footer disabled
 * @param {func} props.onMarkAsSpam - handle "mark as spam" click
 * @param {bool} props.isPage - is page
 * @param {string} props.size - modal size, one of: small(default, 780px), medium(880px), big(1080px), fullscreen
 * @param {string} props.i18n - objest of translations
 * @param {bool} props.isComponent - component instead of title
 * @param {object} props.component - component
 * @param {bool} props.isSubmit - modal button is submit type
 * @param {string} props.isBodyPadding - modal body padding
 * @param {string} props.headingAlign - align text in title, default: left
 * @param {string} props.footerAlign - modal footer alignment, default: right
 * @param {string} props.hasEnterKeyDown - has confirmed by enter key, default false
 * @return {object} An object of children element
 */
declare const Modal: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import React from "react";
