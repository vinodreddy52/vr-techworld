import { Component } from "react";

export default class WidgetBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err) { console.error("Chat widget error:", err); }
  render() { return this.state.failed ? null : this.props.children; }
}