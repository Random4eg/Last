import CircularIntegration from "../../helpers/ui/CircularIntegration"
import RecipeReviewCard from "../../helpers/ui/RecipeReviewCard"
import SimpleBackdrop from "../../helpers/ui/SimpleBackdrop"
import TriggersTooltips from "../../helpers/ui/TriggersTooltips"



export const Home = () => {
  return (
  <div>
    <RecipeReviewCard />
      <SimpleBackdrop />
      <CircularIntegration />
      <TriggersTooltips/>
    </div>  
     
    
  )
}
