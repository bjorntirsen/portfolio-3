import { Project } from '@/types/StoryblokTypes';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type CardProps = React.ComponentProps<typeof Card>;

type Props = {
  project: Project;
} & CardProps;

function ProjectCard({ className, ...props }: Props) {
  console.log('props: ', props);
  const { name, content } = props.project;
  const { description, subtitle, repo, deploy, dateFirstCompleted } = content;
  const formattedDate = new Date(dateFirstCompleted).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );
  return (
    <Card className={cn('flex w-[300px] flex-col', className)} {...props}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        {repo ? (
          <Link href={repo} className={buttonVariants({ variant: 'outline' })}>
            Repository
          </Link>
        ) : null}
        {deploy ? (
          <Link
            href={deploy}
            className={buttonVariants({ variant: 'default' })}
          >
            Deployed Site
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
