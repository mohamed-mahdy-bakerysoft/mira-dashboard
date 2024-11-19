import ProfileWrapper from "../profileWrapper";


export default function UserProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <ProfileWrapper>
            {children}
        </ProfileWrapper>
    )
}