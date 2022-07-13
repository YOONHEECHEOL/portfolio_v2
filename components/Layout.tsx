import HeadInfo from './HeadInfo'
import FooterInfo from './FooterInfo'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeadInfo />
      <div>
        {children}
      </div>
      <FooterInfo />
    </>
  )
}