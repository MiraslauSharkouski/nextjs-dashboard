import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={78}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1204}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable title="Latest Posts" limit={5} />
    </>
  );
}
