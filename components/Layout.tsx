import HeadInfo from './HeadInfo'

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
    </>
  )
}