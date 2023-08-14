mySelection = app.activeDocument.selection;
myDoc = app.activeDocument;
if (mySelection instanceof Array)
{
	selSwatches = myDoc.swatches.getSelected();
	
	if(selSwatches.length != 0)
		for (i=0; i<mySelection.length; i++)
		{
			if(mySelection[i].typename == "PathItem" || mySelection[i].typename == "CompoundPathItem")
			{
				selItem = mySelection[i];
				selItem.filled = true;

				var randomNum = Math.random();
    if (randomNum <= 0.75) {
      swatchIndex = 0;
    } else {

				swatchIndex = Math.round( Math.random() * (selSwatches.length - 1 ));
    }
				
				if(selItem.typename == "PathItem")
					selItem.fillColor = selSwatches[swatchIndex].color;
				else
					selItem.pathItems[0].fillColor = selSwatches[swatchIndex].color;
				
			}
		}
}
