declare module '*.svg' {
	const content: string;
	export default content;
}
declare global {
	interface Window {
	  ethereum: import('ethers').providers.ExternalProvider;
	}
  }